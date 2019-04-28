import { action, computed, observable } from 'mobx';
import { auth, provider } from '../lib/firebase/firebase';
import { createContext } from 'react';

class AuthStore {
  @observable
  user: firebase.User | null = null;

  constructor() {
    auth.onAuthStateChanged(this.setUser);
  }

  // computed를 사용할 때는 앞에 get을 사용해야하는 듯?
  @computed
  get isAdmin(): boolean {
    if (this.user && this.user.email === 'parksy8189@gmail.com') {
      return true;
    }
    return false;
  }

  // action은 state를 변경하는 모든 것을 말한다.
  @action.bound
  setUser(user: firebase.User | null) {
    if (!process.browser) {
      return null;
    }
    this.user = user;
  }

  @action.bound
  login() {
    return auth.signInWithPopup(provider);
  }

  @action.bound
  logout() {
    return auth.signOut();
  }
}

export const AuthStoreContext = createContext(new AuthStore());
