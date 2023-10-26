// will create methods to call api 
import { httpAxios } from "@/helper/httpHelper";
export function AddTask(task){

    const result= httpAxios.post("/api/tasks", task).then((response)=> response.data);
    return result;
}