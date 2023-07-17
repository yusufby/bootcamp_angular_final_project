import { Component, OnInit, ViewChild  } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { UsersComponent } from './users/users.component';
import { MatDialog } from '@angular/material/dialog';
import { JobServiceService } from './job-service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'my-career-website';

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _dialog: MatDialog, 
    private _empService: JobServiceService,
    private router: Router,) {}
  
    openRegistrationForm(){
    this._dialog.open(RegistrationComponent)
  }
  
  users(){
    this.router.navigate(['/users']);
  }
  search(){
    this.router.navigate(['/search']);
  }
  getUserList() {
    this._empService.getUserList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
   

      },
      error: console.log,
    });
  }
  ngOnInit(): void {
 this.getUserList();
  }

}
