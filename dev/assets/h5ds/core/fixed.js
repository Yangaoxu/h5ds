import PageClass from './PageClass';

/**
 * 页面
 */
export default class Fixed extends PageClass{
    constructor(props) {
        super(props);
    }

    //初始化方法
    init() {
        console.log(this);
        // ...
        this._init();
    }
}