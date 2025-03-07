import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people-add',
  standalone: true,
    imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './people-add.component.html',
  styleUrl: './people-add.component.css'
})
export class PeopleAddComponent {
  person = { name: '', age: 0, gender: '', mobileNumber: '' };

  constructor(private peopleService: PeopleService, private router: Router) {}

  onSubmit() {
    this.peopleService.addPerson(this.person).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
