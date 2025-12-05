const constants = {
    gridFilterModel: { items: [], logicOperator: 'and', quickFilterValues: Array(0), quickFilterLogicOperator: 'and' },
    permissions: { edit: true, add: true, export: true, delete: true, clearFilterText: "CLEAR THIS FILTER" },
    exportTypes: {
        PDF: 'PDF',
        CSV: 'text/csv',
        EXCEL: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    },
    actionTypes: {
        Copy: "Copy",
        Edit: "Edit",
        Delete: "Delete"
    },
    supportedLanguageCodes: {
        "en": "English",
        "tr-TR": "Turkish",
        "es-ES": "Spanish",
        "da-DK": "Danish",
        "de-DE": "German",
        "el-GR": "Greek",
        "fr-FR": "French",
        "pt-PT": "Portuguese",
        "it-IT": "Italian",
        "ru-RU": "Russian"
    },
    ShowCustomActions: [9, 58],
    pageSizeOptions: [5, 10, 20, 50, 100],
    OrderSuggestionHistoryFields: {
        OrderStatus: 'OrderStatusId'
    }
}

export default constants;