import { Controller } from "@hotwired/stimulus";
import { enter, leave, toggle } from "el-transition";

export default class extends Controller {
  static targets = ["openUserMenu", "dropdown"];
  connect() {
    this.openUserMenuTarget.addEventListener("click", () => {
      openDropDown(this.dropdownTarget);
    });
  }
}

function openDropDown(e) {
  toggle(e).then(() => {});
}

// remove element when close
function closeDropDown(e) {
  leave(e).then(() => {
    element.destroy();
  });
}
