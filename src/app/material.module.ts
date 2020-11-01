import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import {NgModule} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatTooltipModule],
    exports: [MatButtonModule, MatFormFieldModule, MatTooltipModule],
})
export class MaterialModule {}
