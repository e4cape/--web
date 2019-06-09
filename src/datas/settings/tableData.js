import {
  SystemOrderType 
} from '@/enums/merchant'
// 生成规则
export const generationRules = [ 
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'PurchaseOrder',
    modulName: 'ERP的成品采购入库单',
    SystemOrderType: SystemOrderType.StockingCloudPurchaseOrder,
    modul: '采购管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'ReturnOrder',
    modulName: 'ERP的成品退货出库单',
    SystemOrderType: SystemOrderType.StockingCloudReturnOrder,
    modul: '采购管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'ModifyOrder',
    modulName: '批量修改单',
    SystemOrderType: SystemOrderType.StockingCloudModifyOrder,
    modul: '采购管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'PrintOrder',
    modulName: '标签打印单',
    SystemOrderType: SystemOrderType.StockingCloudPrintOrder,
    modul: '采购管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'ReinfPlanOrder',
    modulName: '智能配货计划单',
    SystemOrderType: SystemOrderType.StockingCloudReinfPlanOrder,
    modul: '智能配货',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'JunkModifyOrder',
    modulName: '旧货修改单',
    SystemOrderType: SystemOrderType.StockingCloudJunkModifyOrder,
    modul: '旧货管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'JunkChangeOrder',
    modulName: '旧货转换成品',
    SystemOrderType: SystemOrderType.StockingCloudJunkChangeOrder,
    modul: '旧货管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'JunkOutOrder',
    modulName: '旧货出库单',
    SystemOrderType: SystemOrderType.StockingCloudJunkOutOrder,
    modul: '旧货管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'JunkPrintOrder',
    modulName: '旧货标签打印单',
    SystemOrderType: SystemOrderType.StockingCloudJunkPrintOrder,
    modul: '旧货管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'TakingOrder',
    modulName: 'ERP的库存盘点单',
    SystemOrderType: SystemOrderType.StockingCloudTakingOrder,
    modul: '仓库管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'AppropOrder',
    modulName: 'ERP的成品调拨单',
    SystemOrderType: SystemOrderType.StockingCloudAppropOrder,
    modul: '仓库管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'PriceOrder',
    modulName: 'ERP的调价单',
    SystemOrderType: SystemOrderType.StockingCloudPriceOrder,
    modul: '销售管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'TakingReport1',
    modulName: 'ERP的报损单',
    SystemOrderType: SystemOrderType.StockingCloudTakingReport1,
    modul: '仓库管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'TakingReport3',
    modulName: 'ERP的报溢单',
    SystemOrderType: SystemOrderType.StockingCloudTakingReport3,
    modul: '仓库管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'FinanceBillBasic1',
    modulName: 'ERP的应收款单',
    SystemOrderType: SystemOrderType.StockingCloudFinanceBillBasic1,
    modul: '财务管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'RmaRepairOrder',
    modulName: 'ERP的维修单',
    SystemOrderType: SystemOrderType.StockingCloudRmaRepairOrder,
    modul: '售后管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'FinanceBillBasic3',
    modulName: 'ERP的应付款单',
    SystemOrderType: SystemOrderType.StockingCloudFinanceBillBasic3,
    modul: '财务管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'FinanceBillPaid1',
    modulName: 'ERP的已收款单',
    SystemOrderType: SystemOrderType.StockingCloudFinanceBillPaid1,
    modul: '财务管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'FinanceBillPaid3',
    modulName: 'ERP的已付款单',
    SystemOrderType: SystemOrderType.StockingCloudFinanceBillPaid3,
    modul: '财务管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  }
]
// 模拟表格数据
export const auditRules = [ 
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'PurchaseOrder',
    modulName: 'ERP的成品采购入库单',
    SystemOrderType: SystemOrderType.StockingCloudPurchaseOrder,
    modul: '采购管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'ReturnOrder',
    modulName: 'ERP的成品退货出库单',
    SystemOrderType: SystemOrderType.StockingCloudReturnOrder,
    modul: '采购管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'ModifyOrder',
    modulName: '批量修改单',
    SystemOrderType: SystemOrderType.StockingCloudModifyOrder,
    modul: '采购管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'ReinfPlanOrder',
    modulName: '智能配货计划单',
    SystemOrderType: SystemOrderType.StockingCloudReinfPlanOrder,
    modul: '智能配货',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'JunkModifyOrder',
    modulName: '旧货修改单',
    SystemOrderType: SystemOrderType.StockingCloudJunkModifyOrder,
    modul: '旧货管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'JunkChangeOrder',
    modulName: '旧货转换成品',
    SystemOrderType: SystemOrderType.StockingCloudJunkChangeOrder,
    modul: '旧货管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'JunkOutOrder',
    modulName: '旧货出库单',
    SystemOrderType: SystemOrderType.StockingCloudJunkOutOrder,
    modul: '旧货管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'SaleOrder',
    modulName: 'ERP的零售单',
    SystemOrderType: SystemOrderType.StockingCloudSaleOrder,
    modul: '销售管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'PriceOrder',
    modulName: 'ERP的调价单',
    SystemOrderType: SystemOrderType.StockingCloudPriceOrder,
    modul: '销售管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'RmaReturnOrder',
    modulName: 'ERP的售后退货单',
    SystemOrderType: SystemOrderType.StockingCloudRmaReturnOrder,
    modul: '售后管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'AppropOrder',
    modulName: 'ERP的成品调拨单',
    SystemOrderType: SystemOrderType.StockingCloudAppropOrder,
    modul: '仓库管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'TakingReport1',
    modulName: 'ERP的报损单',
    SystemOrderType: SystemOrderType.StockingCloudTakingReport1,
    modul: '仓库管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'TakingReport3',
    modulName: 'ERP的报溢单',
    SystemOrderType: SystemOrderType.StockingCloudTakingReport3,
    modul: '仓库管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'FinanceBillPaid1',
    modulName: 'ERP的已收款单',
    SystemOrderType: SystemOrderType.StockingCloudFinanceBillPaid1,
    modul: '财务管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  },
  {
    systemsKey: 'StockingCloud',
    systemsValue: 'ERP系统',
    modulKey: 'FinanceBillPaid3',
    modulName: 'ERP的已付款单',
    SystemOrderType: SystemOrderType.StockingCloudFinanceBillPaid3,
    modul: '财务管理',
    state: '',
    AuditType: '',
    length: '',
    index: 0
  }
]
