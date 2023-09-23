import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/core/models/student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
})
export class StudentsListComponent implements OnInit {
  students: Student[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const jsonFile = 'assets/students.json';

    this.http.get(jsonFile).subscribe((res: any) => {
      this.students = res;
      console.log(this.students);
    });
  }
}
