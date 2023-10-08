import React, {FC} from "react";
import {ProductCardType} from "~/components/ProductCard/types/ProductCardType";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const ProductCard: FC<ProductCardType> = ({details}) => {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={details.image.href}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {details.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {details.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductCard;
