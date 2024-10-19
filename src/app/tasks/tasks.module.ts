import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";

import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
declarations: [    
    TaskComponent,
    NewTaskComponent,
    TasksComponent
],
exports: [TasksComponent], //it's the only component I need to export
imports: [SharedModule, FormsModule, CommonModule]

})
export class TasksModule {

}