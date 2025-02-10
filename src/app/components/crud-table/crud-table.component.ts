import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from './models/employee.model';

@Component({
  selector: 'app-crud-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud-table.component.html',
  styleUrl: './crud-table.component.scss'
})
export class CrudTableComponent {
  employees: Employee[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', department: 'IT', salary: 50000 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', department: 'HR', salary: 45000 },
  ];

  newEmployee: Employee = this.getEmptyEmployee();
  editingEmployee: Employee | null = null;
  departments: string[] = ['IT', 'HR', 'Finance', 'Marketing', 'Operations'];

  private getEmptyEmployee(): Employee {
    return {
      id: 0,
      name: '',
      email: '',
      department: '',
      salary: 0
    };
  }

  addEmployee() {
    if (this.isValidEmployee(this.newEmployee)) {
      this.newEmployee.id = Math.max(...this.employees.map(e => e.id), 0) + 1;
      this.employees.push({ ...this.newEmployee });
      this.newEmployee = this.getEmptyEmployee();
    }
  }

  editEmployee(employee: Employee) {
    this.editingEmployee = { ...employee };
  }

  updateEmployee() {
    if (this.editingEmployee && this.isValidEmployee(this.editingEmployee)) {
      const index = this.employees.findIndex(e => e.id === this.editingEmployee!.id);
      if (index !== -1) {
        this.employees[index] = { ...this.editingEmployee };
      }
      this.editingEmployee = null;
    }
  }

  deleteEmployee(id: number) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.employees = this.employees.filter(e => e.id !== id);
    }
  }

  cancelEdit() {
    this.editingEmployee = null;
  }

  private isValidEmployee(employee: Employee): boolean {
    return !!(
      employee.name &&
      employee.email &&
      employee.department &&
      employee.salary > 0
    );
  }
}
