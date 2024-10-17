// 定义仓库
// 引入configureStore 定义仓库
import { configureStore } from "@reduxjs/toolkit";
// 导入counter
import counter from "./modules/counter";
// 导出
export default configureStore({
  reducer: {
    counter
  }
})


// redux状态使用方法
// 导入方法
// import { increment} from "../../store/modules/counter";
// 导入useDispatch和useSelector
// import { useSelector, useDispatch } from "react-redux";
// const dispatch = useDispatch();
// const count = useSelector((state: any) => state.counter.count);
// 调用方法
// dispatch(increment())