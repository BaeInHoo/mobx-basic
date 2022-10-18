import { action, makeObservable, observable } from "mobx";

export default class UserStore {
  @observable
  state = {
    users: [],
    loading: false,
    error: null,
  };

  constructor() {
    makeObservable(this);
  }

  @action
  pending() {
    this.state.loading = true;
    this.state.error = null;
  }

  @action
  success() {
    this.state.users = users;
    this.state.loading = false;
    this.state.error = null;

  }

  @action
  fail() {
    this.state.loading = false;
    this.state.error = error;
  }
}