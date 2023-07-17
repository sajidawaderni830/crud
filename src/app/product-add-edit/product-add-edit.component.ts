import { Component, OnInit , Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../services/product.service';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss'],
  
})
export class ProductAddEditComponent implements OnInit {
  prodForm: FormGroup;
  
  constructor(private _fb: FormBuilder,
    private _prodService: ProductService,
    private _dialogRef: MatDialogRef<ProductAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService:CoreService
  ) {
    this.prodForm = this._fb.group({
      name: '',
      prix: '',
      quantite: '',
    });
   
  }
  ngOnInit(): void {
    this.prodForm.patchValue(this.data)
  }
  onFormSubmit(){
    if (this.prodForm.valid) {
      if (this.data) {
        this._prodService.updateProduct(this.data.id,this.prodForm.value).subscribe({
          next: (val: any) => {
            alert('');
            this._coreService.openSnackBar('product updatede')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        
        });
        
      } else {
        
      
        this._prodService.addProduct(this.prodForm.value).subscribe({
          next: (val: any) => {
            alert('');
            this._coreService.openSnackBar('produit ajouter avec succee')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        
        });
      }
    }
  }
}
