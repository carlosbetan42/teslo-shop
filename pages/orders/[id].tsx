import React from "react";
import { Box, Card, CardContent, Divider, Grid, Typography, Link, Chip } from "@mui/material";
import NextLink from "next/link";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";
import CreditCardOffOutlined from "@mui/icons-material/CreditCardOffOutlined";
import CreditScoreOutlined from "@mui/icons-material/CreditScoreOutlined";

const OrderPage = () => {
  return (
    <ShopLayout title={"Resumen de orden 1234546"} pageDescription={"Resumen de la orden"}>
      <Typography variant='h1' component='h1'>
        Orden 1234546
      </Typography>

      {/* <Chip sx={{ my: 2 }} label='Pendiente de pago' variant='outlined' color='error' icon={<CreditCardOffOutlined />} /> */}

      <Chip sx={{ my: 2 }} label='Pagada' variant='outlined' color='success' icon={<CreditScoreOutlined />} />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />

              <Box display='flex' justifyContent='space-between'>
                <Typography variant='subtitle1'>Dirección de entrega</Typography>
                <NextLink href='/checkout/address' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <Typography>Nombre nombre</Typography>
              <Typography>323 algun lugar</Typography>
              <Typography>Ciudad, HYA 234</Typography>
              <Typography>Kuwait</Typography>
              <Typography>+1 2323232333</Typography>

              <Divider sx={{ my: 1 }}></Divider>

              <Box display='flex' justifyContent='end'>
                <NextLink href='/cart' passHref>
                  <Link underline='always'>Editar</Link>
                </NextLink>
              </Box>

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                {/* Pagar */}
                <h1>Pagar</h1>

                <Chip sx={{ my: 2 }} label='Pagada' variant='outlined' color='success' icon={<CreditScoreOutlined />} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
