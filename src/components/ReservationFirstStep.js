import * as React from 'react';
import { Grid } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { DataGrid } from '@mui/x-data-grid';
import { darken, lighten, styled } from '@mui/material/styles';

const columns = [
    {
        field: 'timeFrom',
        headerName: 'Od',
        width: 150
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

/*function CustomFooterComponent(props) {
  return (
    <Box sx={{ p: 1, display: 'flex' }}>
      Selected: {props.state}
    </Box>
  )
}*/

const getBackgroundColor = (color, mode) => 
  mode === 'dark' ? darken(color, 0.7) : lighten(color, 0.7);

const getHoverBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const StyleDataGrid = styled(DataGrid)(({theme}) => ({  
    '& .super-app-theme--false': {
      backgroundColor: getBackgroundColor(
        theme.palette.grey[500], 
        theme.palette.mode),
    '&:hover': {
      backgroundColor: getHoverBackgroundColor(
        theme.palette.grey[500],
        theme.palette.mode,
      ),
    },
  }
}));

export default function ReservationFirstStep() {

  const [date, setDate] = React.useState(Date());
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);

  return(
    <Grid container alignItems="left" spacing={2}>
      <Grid item sm={0} md={0} xl={3}>
        <StaticDatePicker              
          onChange={(newDate) => setDate(newDate)}
          date={date}
          defaultValue={dayjs(date)}
          displayStaticWrapperAs="desktop" 
          slotProps={{
            toolbar: { toolbarFormat: 'ddd DD MMMM', hidden: false },
          }}
        />
      </Grid>
      <Grid item sm={0} md={12} xl={9}>     
        <StyleDataGrid rows={rows} columns={columns}                             
          checkboxSelection 
          sx={{ 
            backgroundColor: 'white'
          }} 
          getRowClassName={(params) => 
            `super-app-theme--${params.row.state}`
          }
          isRowSelectable={(params) => 
            params.row.state === true
          }
          onRowSelectionModelChange={(newRowSelectionModel) => {
            setRowSelectionModel(newRowSelectionModel);
          }}
          rowSelectionModel={rowSelectionModel}
          /*slots={{
            footer: CustomFooterComponent,
          }}
          slotProps={{
            footer: { select }
          }}
          onRowClick={() => 
            setSelect((params) =>
              params.row.state
            )
          }*/
        />            
      </Grid>
    </Grid>
  );
}