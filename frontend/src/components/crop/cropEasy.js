import React, { useState } from 'react';
import { Cancel } from '@mui/icons-material';
import { CropIcon } from '@mui/icons-material/Crop';
import { Box, Button, DialogActions, DialogContent, Slider, Typography } from '@mui/material';

const cropEasy = ({ photoURL, setOpenCrop }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)

    const cropComplete = (croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }

    const cropImage = async () => {

    }

    return (
        <div>
            <DialogContente dividers
                sx={{
                    background: '#333',
                    possition: 'relative',
                    height: 400,
                    width: 'auto',
                    minWidth: { sm: 500 },
                }}>
                <Cropper
                    image={photoURL}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={1}
                    onZoomChange={setZoom}
                    onRotationChange={setRotation}
                    onCropChange={setCrop}
                    onCropComplete={cropComplete}
                />
            </DialogContente>
            <DialogActions sx={{flexDirections: "column", mx:3, my:2}}>
                <Box sx={{width: '100%', mb:1}}>
                    <Box>
                        <typography>Zoom: {zoomPercent(zoom)}</typography>
                        <Slider 
                            valueLabelDisplay='auto'
                            valueLabelFormat={zoomPercent}
                            min={1}
                            max={3}
                            step={0.1}
                            value={zoom}
                            ochange={(e, zoom)=> setZoom(zoom)}
                        />
                    </Box>
                    <Box>
                        <typography>Rotation: {rotation}</typography>
                        <Slider 
                            valueLabelDisplay='auto'
                            min={0}
                            max={360}
                            value={rotation}
                            ochange={(e, rotation)=> setRotation(rotation)}
                        />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: "wrap"
                    }}>
                        <Button 
                            variant="outline"
                            startIcon={<Cancel/>}
                            onClick={() => setOpenCrop(false)}
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="contained"
                            startIcon={<CropIcon />}
                            onClick={cropImage}
                        >
                            Crop
                        </Button>
                    </Box>
                </Box>
            </DialogActions>
        </div>
    )
}

export default cropEasy;

const zoomPercent = (value) => {
    return  `${Match.round(value * 100)}%`;
}