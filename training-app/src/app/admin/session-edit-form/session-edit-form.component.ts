import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/session';
import { FakeSessionItemService } from '../fake-session-item.service';
//import {SessionHttpService} from '../session-http.service';
import { Observable} from 'rxjs';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  private sub: any;
  session:any;
  tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift', 'Xamarin'];
  id: any;
  constructor(private route: ActivatedRoute, private sessionItemService: FakeSessionItemService) { }
  ngOnInit() {
  this.sub = this.route.params.subscribe(params => { this.id = params['id']; }); // (+) converts string 'id' to a number
  console.log('Session ID ' + this.id.toString());
  this.session = this.sessionItemService.getSession(this.id);
  }
  editSession(sessionItem: any) {
  console.log(sessionItem);
  }}
