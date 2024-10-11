import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../image-modal/image-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  models = [
    { name: 'EBS 01', imageUrl: 'assets/images/svg/portoes/EBS01.jpg' },
    { name: 'EBS 02', imageUrl: 'assets/images/svg/portoes/EBS02.jpg' },
    { name: 'EBS 03', imageUrl: 'assets/images/svg/portoes/EBS03.jpg' },
    { name: 'EBS 04', imageUrl: 'assets/images/svg/portoes/EBS04.jpg' },
    { name: 'EBS 05', imageUrl: 'assets/images/svg/portoes/EBS05.jpg' },
    { name: 'EBS 06', imageUrl: 'assets/images/svg/portoes/EBS06.jpg' },
    { name: 'EBS 07', imageUrl: 'assets/images/svg/portoes/EBS07.jpg' },
    { name: 'EBS 08', imageUrl: 'assets/images/svg/portoes/EBS08.jpg' },
    { name: 'EBS 09', imageUrl: 'assets/images/svg/portoes/EBS09.jpg' },
    { name: 'EBS 10', imageUrl: 'assets/images/svg/portoes/EBS10.jpg' },
    { name: 'EBS 11', imageUrl: 'assets/images/svg/portoes/EBS11.jpg' },
    { name: 'EBS 12', imageUrl: 'assets/images/svg/portoes/EBS12.jpg' },
    { name: 'EBS 13', imageUrl: 'assets/images/svg/portoes/EBS13.jpg' },
    { name: 'EBS 14', imageUrl: 'assets/images/svg/portoes/EBS14.jpg' },
    { name: 'EBS 15', imageUrl: 'assets/images/svg/portoes/EBS15.jpg' },
    { name: 'EBS 16', imageUrl: 'assets/images/svg/portoes/EBS16.jpg' },
    { name: 'EBS 17', imageUrl: 'assets/images/svg/portoes/EBS17.jpg' },
    { name: 'EBS 18', imageUrl: 'assets/images/svg/portoes/EBS18.jpg' },
  ];  
  
  constructor(public dialog: MatDialog) {}

  openImageModal(imageUrl: string): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { imageUrl },
      width: '80%',
      height: 'auto', // ou uma altura fixa, como '500px'
      panelClass: 'custom-modalbox', // Certifique-se de que a classe está corretamente implementada
      disableClose: false,
      hasBackdrop: true,
    });    
  }
}
