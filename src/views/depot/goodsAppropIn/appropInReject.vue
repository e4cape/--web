<template>
  <!-- @module Dialog·退回 -->
  <el-dialog title="退回" :visible="visible" @update:visible="$emit('update:visible', $event)" @open="rejectReason = ''" @close="$emit('listenRejectDialog', false)">
    <el-form :label-position="'right'" label-width="100px" v-if="data.length">
      <el-row v-if="data.length === 1">
        <el-col :span="12">
          <el-form-item label="单据编号：">
            <span>{{data[0].OutakeCode}}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="发货：">
            <span>{{data[0].SendTime | filterDateMinutes}}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-form-item label="退回原因：">
          <el-input v-model="rejectReason" placeholder="退回原因备注" :maxlength="200" name="rejectReason"></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        退回后该单据回退到调拨出库的门店，并且不在本店显示，确定退回？
      </el-row>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="makeReject" :loading="$store.getters.is_loading" name="btnMakeReject">确 定</el-button>
      <el-button @click="$emit('update:visible', false)" name="btnCanCel">取 消</el-button>
    </span>
  </el-dialog>
  <!-- End Dialog·退回 -->
</template>

<script>
import {
  STOCKING_API_GOODS_ALLOT_ORDER_INTAKE_RETURNS,
  STOCKING_API_GOODS_ALLOT_ORDER_INTAKE_RETURN
} from '@/apis/stocking.js'

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default() {
        return []
      },
    }
  },
  data() {
    return {
      rejectReason: '',
    }
  },
  methods: {
    makeReject() {
      let result
      if (this.data.length > 1) {
        let items = this.data.map(item => {
          return {
            IntakeId: item.IntakeId,
            CheckUserId: item.CheckUserId,
            CheckUser: item.CheckUser,
            CheckNote: item.CheckNote
          }
        })
        result = STOCKING_API_GOODS_ALLOT_ORDER_INTAKE_RETURNS({
          Items: items,
          CheckNote: this.rejectReason
        })
      } else {
        result = STOCKING_API_GOODS_ALLOT_ORDER_INTAKE_RETURN({
          IntakeId: this.data[0].IntakeId,
          CheckNote: this.rejectReason
        })
      }
      this.$store.commit('SET_BTN_LOADING', true)
      result.then(res => {
        if (res.data.Code === 'CORRECT') {
          this.$message({
            message: res.data.Message,
            type: 'success'
          })
          this.$emit('listenRejectDialog', true)
          this.$emit('update:visible', false)
        }
        this.$store.commit('SET_BTN_LOADING', false)
      })
    },
    
  },
  
}
</script>

