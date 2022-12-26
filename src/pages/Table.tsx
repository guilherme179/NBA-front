import { useEffect, useState } from 'react';
import { Title } from '../components/Title';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { DataGrid, gridPageCountSelector, gridPageSelector, ptBR, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Pagination } from '@mui/material';
import ThreePoints from '../images/three-points.gif'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Logout } from '../buttons/Logout';

type Data = {
    pos: number,
    player: string,
    team: string,
    total: string,
}

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

export function Table() {
    const [status, setStatus] = useState<Data[]>([]);
  
    async function Request (url: String) {
        await   fetch(`http://localhost:2312/${url}`)
                .then( response => response.json())
                .then( data => {
                    setStatus(data);
                });
    }

    function changeUrlToThreePoints(){
        Request('three-points');
    }

    function changeUrlToPoints(){
        Request('points');
    }

    function changeUrlToAssistants(){
        Request('assistants');
    }

    function changeUrlToRebounds(){
        Request('rebounds');
    }

    function changeUrlToSteals(){
        Request('steals');
    }

    function changeUrlToBlocks(){
        Request('blocks');
    }

    const [columns, setColumns] = useState([
        {field: 'pos', 
            filter: true, 
            width: 100, 
            headerAlign: 'center', 
            cellAlign: 'center', 
            headerClassName: 'super-app-theme--header',
            cellClassName: 'super-app-theme--cell-pos',
            align: 'center'
        },
        {field: 'player', 
            filter: true, 
            width: 166, 
            headerAlign: 'center', 
            headerClassName: 'super-app-theme--header',
            cellClassName: 'super-app-theme--cell',
            align: 'center'
        },
        {field: 'team', 
            filter: true, 
            width: 166, 
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
            cellClassName: 'super-app-theme--cell',
            align: 'center'
        },
        {field: 'total',
            filter: true,
            width: 166,
            headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
            cellClassName: 'super-app-theme--cell',
            align: 'center'
        },
      ]);

    return (
        <div>
            <Header/>
            <div className="bg-black pt-4 pb-4 font-open-sans">
                <div className='flex justify-end'>
                    <Logout />
                </div>
                <div className='rounded-3xl mx-4 mt-4 min-h-[81vh]'  style={{ backgroundImage: `url(${ThreePoints})` }}>
                    <Title />
                    <div className="pt-0 p-5 flex lg:mt-0 lg:ml-4 justify-center">
                        <button
                            type="button"
                            className=" inline-flex 
                            items-center 
                            rounded-md border 
                            border-white     
                            bg-[#da6523]
                            px-4 
                            py-2 
                            mr-4
                            text-sm 
                            font-medium 
                            text-white
                            shadow-sm 
                            hover:bg-white
                            hover:text-[#da6523] 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-[#da6523]
                                        focus:ring-offset-2"
                                        onClick={changeUrlToThreePoints}
                                        >  Três pontos </button>
                        <button
                            type="button"
                            className=" inline-flex 
                            items-center 
                            rounded-md border 
                            border-white     
                            bg-[#da6523]
                            px-4 
                            py-2 
                                        mr-4
                                        text-sm 
                                        font-medium 
                                        text-white
                                        shadow-sm 
                                        hover:bg-white
                                        hover:text-[#da6523] 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-[#da6523]
                                        focus:ring-offset-2"
                                        onClick={changeUrlToPoints}
                                        > Pontos </button>
                        <button
                            type="button"
                            className=" inline-flex 
                            items-center 
                            rounded-md border 
                            border-white     
                            bg-[#da6523]
                            px-4 
                            py-2 
                            mr-4
                                        text-sm 
                                        font-medium 
                                        text-white
                                        shadow-sm 
                                        hover:bg-white
                                        hover:text-[#da6523] 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-[#da6523]
                                        focus:ring-offset-2"
                                        onClick={changeUrlToAssistants}
                                        > Assistências </button>
                        <button
                            type="button"
                            className=" inline-flex 
                            items-center 
                            rounded-md border 
                            border-white     
                                        bg-[#da6523]
                                        px-4 
                                        py-2 
                                        mr-4
                                        text-sm 
                                        font-medium 
                                        text-white
                                        shadow-sm 
                                        hover:bg-white
                                        hover:text-[#da6523] 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-[#da6523]
                                        focus:ring-offset-2"
                                        onClick={changeUrlToRebounds}
                                        > Rebotes </button>
                        <button
                            type="button"
                            className=" inline-flex 
                            items-center 
                            rounded-md border 
                            border-white     
                            bg-[#da6523]
                            px-4 
                            py-2 
                            mr-4
                            text-sm 
                            font-medium 
                            text-white
                            shadow-sm 
                            hover:bg-white
                            hover:text-[#da6523] 
                            focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-[#da6523]
                                        focus:ring-offset-2"
                                        onClick={changeUrlToSteals}
                                        > Roubos </button>
                        <button
                            type="button"
                            className=" inline-flex 
                            items-center 
                            rounded-md border 
                            border-white     
                            bg-[#da6523]
                            px-4 
                            py-2 
                            mr-4
                            text-sm 
                            font-medium 
                                        text-white
                                        shadow-sm 
                                        hover:bg-white
                                        hover:text-[#da6523] 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-[#da6523]
                                        focus:ring-offset-2"
                                        onClick={changeUrlToBlocks}
                                        > Bloqueios </button>
                    </div>
                    <div className='p-4 w-full flex justify-center h-[79%] px-36 pb-8'>
                    <Box 
                        sx={{ 
                                '& .super-app-theme--header': {
                                    backgroundColor: '#da6523', 
                                    color: '#fff', 
                                    fontSize: '16px',
                                    fontFamily: 'font-open-sans'
                                }, 
                                '& .super-app-theme--cell-pos': {
                                    backgroundColor: '#da6523', 
                                    color: '#fff', 
                                    fontSize: '14px',
                                    fontFamily: 'font-open-sans'
                                }, 
                                '& .super-app-theme--cell': { 
                                    color: '#fff', 
                                    fontSize: '14px',
                                    fontFamily: 'font-open-sans'
                                }, 
                                height: '100%',     
                                width: '44vw'
                            }} 
                            > 
                        <DataGrid 
                            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText} 
                            getRowId={(status) => status.pos}
                            rows={status} 
                            columns={columns} 
                            pageSize={5}     
                            autoHeight
                            className='min-h-[45vh]'
                            pagination    
                            components={{ Pagination: CustomPagination,}} 
                            />
                    </Box>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}