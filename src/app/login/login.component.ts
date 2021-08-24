import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void{
    this.http.post('http://68.183.135.51/api/users/login',{user: this.form.getRawValue()}, {withCredentials: true})
    .subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('token', res.data.token);
      this.router.navigate(['/home']);
    })
  }

}
