const base = {
    get() {
        return {
            url : "http://localhost:8080/gaoxiaoyiqingfangkong/",
            name: "gaoxiaoyiqingfangkong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gaoxiaoyiqingfangkong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "高校疫情防控"
        } 
    }
}
export default base
