import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { resolve, reject } from 'q';

@Injectable()
export class AuthenticationService {
	constructor() {}

	registerUser(value) {
		return new Promise<any>((resolve, reject) => {
			firebase
				.auth()
				.createUserWithEmailAndPassword(value.email, value.password)
				.then(res => resolve(res), err => reject(err));
		});
	}

	loginUser(value) {
		return new Promise<any>((resolve, reject) => {
			firebase
				.auth()
				.signInWithEmailAndPassword(value.email, value.password)
				.then(res => resolve(res), err => reject(err));
		});
	}

	logutUser() {
		return new Promise((resolve, reject) => {
			if (firebase.auth().currentUser) {
				firebase
					.auth()
					.signOut()
					.then(() => {
						console.log('Log Out');
						resolve();
					})
					.catch(error => {
						reject();
					});
			}
		});
	}

	userDetails() {
		return firebase.auth().currentUser;
	}
}
