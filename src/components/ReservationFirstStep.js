import * as React from 'react';
import { Grid } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { DataGrid } from '@mui/x-data-grid';

import ReservationService from '../services/reservation.service'

const columns = [
    {
        field: 'timeFrom',
        headerName: 'Od',
        width: 150,
        editable: true
    },
    {
        field: 'timeTo',
        headerName: 'Do',
        width: 150
    },
    {
        field: 'state',
        headerName: 'Stav',
        width: 200,
        type: 'boolean'
    }
  ];

const rows = [
    { id: 1, timeFrom: '08:00', timeTo: '08:30', state: false },
    { id: 2, timeFrom: '09:00', timeTo: '09:30', state: true },
    { id: 3, timeFrom: '10:00', timeTo: '10:30', state: false },
    { id: 4, timeFrom: '11:00', timeTo: '11:30', state: false },
    { id: 5, timeFrom: '12:00', timeTo: '12:30', state: false },
    { id: 6, timeFrom: '13:00', timeTo: '13:30', state: true },
    { id: 7, timeFrom: '14:00', timeTo: '14:30', state: true },
    { id: 8, timeFrom: '15:00', timeTo: '15:30', state: false },
    { id: 9, timeFrom: '16:00', timeTo: '16:30', state: false },
    { id: 10, timeFrom: '17:00', timeTo: '17:30', state: false },
    { id: 11, timeFrom: '18:00', timeTo: '18:30', state: true },
    { id: 12, timeFrom: '19:00', timeTo: '19:30', state: false }
  ];

function handleSubmit(event) {
  ReservationService.createNewReservation(
    
  )
}

export default function ReservationFirstStep() {
    return(
        <Grid container alignItems="left" spacing={2}>
            <Grid item xs={3}>
                <StaticDatePicker                     
                    defaultValue={dayjs(new Date())}
                    displayStaticWrapperAs="desktop" 
                    slotProps={{
                        toolbar: { toolbarFormat: 'ddd DD MMMM', hidden: false },
                    }}
                />
            </Grid>
            <Grid item xs={9}>     
                <DataGrid rows={rows} columns={columns} sx={{ backgroundColor: 'white'}}
                        initialState={{
                            pagination: {
                              paginationModel: {
                                pageSize: 8,
                              },
                            },
                          }}
                        pageSizeOptions={[5]}                          
                        checkboxSelection />            
            </Grid>
        </Grid>
    );
}