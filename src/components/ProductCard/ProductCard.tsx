import React from 'react';
import Card from '@material-ui/core/Card';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Image from 'next/image';
import Link from 'next/link';

import { Typography } from '@components';

import useStyles from './ProductCard.styles';

interface ProductCardProps {
    id: string;
    name: string;
    ratingValue: number;
    reviewCount: number;
    price: number;
    availability: number;
    description: string;
    image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    ratingValue,
    reviewCount,
    price,
    availability,
    description,
    image,
}: ProductCardProps) => {
    const classes = useStyles();

    //todo tests

    return (
        <article className={classes.cardContainer}>
            <Card key={id} className={classes.cardRoot}>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={5}>
                        <Box component="div" display="block">
                            <Image
                                src={`/images/${image}`}
                                alt={name}
                                layout="responsive"
                                width={200}
                                height={200}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={7}>
                        <Box component="div">
                            <Link href={`/product/${encodeURIComponent(id)}`}>
                                <a className={classes.description}>
                                    {`${name} ${description}`}
                                </a>
                            </Link>
                        </Box>
                        <Box display="flex">
                            <Box>
                                <Rating
                                    name="rating"
                                    value={ratingValue}
                                    readOnly
                                    precision={0.5}
                                    size="small"
                                />
                            </Box>
                            <Box>
                                <Typography
                                    component="legend"
                                    variant="body2"
                                    color="primary"
                                >
                                    {reviewCount}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            flexDirection="row"
                            justifyContent="flex-start"
                        >
                            <Typography variant="body1" component="span">
                                {price}€
                            </Typography>
                            <Typography
                                variant="body2"
                                color={availability ? 'primary' : 'error'}
                                component="span"
                                className={classes.availability}
                            >
                                {availability ? 'in stock' : 'out of stock'}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </article>
    );
};

export default ProductCard;
