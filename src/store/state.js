export default {
    // 所有的对象属性必须添加在root节点下（防止和非公共组件的状态属性重复，重复会导致覆盖）
    root : {

        // 打开的tab历史记录
        historyTabs : [],

        // 面包屑信息
        crumbsInfo:[],

        //账号管理数据
        accountManagement:[ {
            "id":"201701",
            "user":"gaohanwei1",
            "realName":"XXX",
            "section":"人力资源",
            "role":"普通管理员",
            "state":"可用",
            "joinDate":"2017-01-01"
        },
        {
            "id":"201701",
            "user":"gaohanwei1",
            "realName":"XXX",
            "section":"人力",
            "role":"普通",
            "state":"可用",
            "joinDate":"2017-01-01"
        },
        {
            "id":"201",
            "user":"gaohanwei1",
            "realName":"XXX",
            "section":"人力",
            "role":"普通",
            "state":"可用",
            "joinDate":"2017-01-01"
        },
        ],
        //添加账号
        addAccount:[]
    }
}
