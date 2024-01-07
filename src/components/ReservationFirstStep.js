import * as React from 'react';
import { Grid } from "@mui/material";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { DataGrid } from '@mui/x-data-grid';
import { darken, lighten, styled } from '@mui/material/styles';

import ReservationService from '../services/reservation.service';

const columns = [
    {
        field: 'startTime',
        headerName: 'Od',
        width: 150
    },
    {
        field: 'endTime',
        headerName: 'Do',
        width: 150
    },
    {
        field: 'isReserved',
        headerName: 'Stav',
        width: 200,
        type: 'boolean'
    }
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
    '& .super-app-theme--true': {
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

  const [date, setDate] = React.useState(new Date());
  const [rowSelectionModel, setRowSelectionModel] = React.useState([]);
  const [tableData, setTableData] = React.useState([]);

  async function handlerChangeDate(newDate) {
    setDate(newDate);

    try {
      var selectedDate = dayjs(newDate).format('YYYY-MM-DD');
      var result = await fetchData(selectedDate);
      if (result && result.data) {
        setTableData(result.data);
      } else {
        // Handle the case where result or result.data is undefined
        console.error("Invalid result or result.data");
      }
    } catch (error) {
      // Handle other errors that may occur during fetchData
      console.error("Error fetching data:", error);
    }
  }

  async function fetchData(selectedDate) {        
    try {        
      const result = await ReservationService.getReservationForSelectedDate(selectedDate);
      return result;
    } catch (error) {
      // Handle errors that may occur during the API call
      console.error("Error fetching reservation times:", error);
      throw error; // Re-throw the error to be caught by the calling function
    }
  };

  return(
    <Grid container alignItems="left" spacing={2}>
      <Grid item sm={0} md={0} xl={3}>
        <StaticDatePicker              
          onChange={(newDate) => handlerChangeDate(newDate)}
          date={date}
          defaultValue={dayjs(date)}
          displayStaticWrapperAs="desktop" 
          slotProps={{
            toolbar: { toolbarFormat: 'ddd DD MMMM', hidden: false },
          }}
        />
      </Grid>
      <Grid item sm={0} md={12} xl={9}>     
        <StyleDataGrid rows={tableData} columns={columns}                        
          checkboxSelection 
          sx={{ 
            backgroundColor: 'white'
          }} 
          getRowClassName={(params) => 
            `super-app-theme--${params.row.isReserved}`
          }
          isRowSelectable={(params) => 
            params.row.isReserved === false
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