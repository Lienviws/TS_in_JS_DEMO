interface ILib {
    /** 获取当前环境 */
    getEnv: string
    /** img方法 */
    img: {
        formatImg: (a: string, b: string) => string
    }
    /** url方法 */
    url: {
        formatUrl: (a: string) => string
    }
}

/**
 * xx公司全局变量
 */
declare var XXCompanyLib: ILib // 定义全局变量