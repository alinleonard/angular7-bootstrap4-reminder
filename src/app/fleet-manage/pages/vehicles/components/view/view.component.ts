import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../../../../services/vehicle.service";
import { Vehicle } from "../../../../models/vehicle";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'ngx-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit{
    private sub: any;
    v: Vehicle;

    constructor(private vehicleService: VehiclesService, private route: ActivatedRoute) {

    }

    // load data once component is ready
    ngOnInit(): void {
        // subscribe to the route params
        this.sub = this.route.params.subscribe(params => {
            let id = params['id'];
            this.vehicleService.getById(id).subscribe(vehicle => this.v = vehicle);
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
