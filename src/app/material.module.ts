import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule,
  MatDialogModule, MatPaginatorModule, MatTooltipModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  exports : [
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
