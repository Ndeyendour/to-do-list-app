import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { DateAdapter } from '@angular/material/core';
import { MatLegacyDialogModule as MatDialogModule, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';


import { DialogTodoComponent } from './dialog-todo.component';
import { environment } from 'src/environments/environment.prod';

describe('DialogTodoComponent', () => {
  let component: DialogTodoComponent;
  let fixture: ComponentFixture<DialogTodoComponent>;

  const todoMock = {
    category: 'work',
    task: 'Some task',
    priopity: 'low'
  };

  const MatDialogRefMock = {
    close: () => {}
  };

  const dateAdapterMock = jasmine.createSpyObj('adapter', ['setLocale']);
  dateAdapterMock.setLocale = () => of('en-GB');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTodoComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        MatDialogModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: MatDialogRefMock },
        { provide: MAT_DIALOG_DATA, useValue: todoMock },
        { provide: SnackBarService, useValue: {} },
        { provide: DateAdapter, useValue: dateAdapterMock }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.editData = todoMock;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
