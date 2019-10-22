import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { from } from 'rxjs';

@Component({
	selector: 'app-komentar',
	templateUrl: './komentar.page.html',
	styleUrls: ['./komentar.page.scss'],
})
export class KomentarPage implements OnInit {
	constructor(private route: Router, private http: HttpClient) {}

	ngOnInit(): void {
		this.http.get('https://jsonplaceholder.typicode.com/comments/').subscribe(
			res => {
				document.getElementById('komentar').innerHTML = res[0]['body'];
			},
			err => {
				console.log('Error occured');
			}
		);
	}
}
