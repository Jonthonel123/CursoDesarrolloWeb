import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

import {
  Container,
  Box,
  Card,
  CardContent,
  Grid,
  Button,
  Typography,
} from "@mui/material";

const Cart = () => {
  const { cartBooks, deleteItem } = useContext(BookContext);

  const total = cartBooks
    .map((book) =>
      book.saleInfo.saleability === "NOT_FOR_SALE"
        ? 0
        : book.saleInfo.listPrice.amount
    )
    .reduce((prev, curr) => prev + curr);

  return (
    <Container>
      <Typography variant="h4">
        Carro ({cartBooks.length} productos){" "}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          {cartBooks.length > 0 &&
            cartBooks.map((book) => (
              <Box my={3}>
                <Card>
                  <CardContent>
                    <Grid container spacing={3}>
                      <Grid item xs={2}>
                        <img
                          src={book.volumeInfo?.imageLinks?.thumbnail}
                          width={80}
                          alt=""
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body1">
                          {book.volumeInfo.title.substring(0, 20)}
                        </Typography>
                        <Typography mt={3} variant="body1">
                          {book.volumeInfo?.description?.substring(0, 60)}
                        </Typography>
                        <Typography mt={3}>
                          {book.volumeInfo.publishedDate}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sx={{
                          textAlign: "right",
                        }}
                      >
                        <Typography variant="h6" color="#2A7B55">
                          S/{" "}
                          {book.saleInfo.saleability === "NOT_FOR_SALE"
                            ? "0"
                            : book.saleInfo.listPrice.amount}
                        </Typography>
                        <Box mt={5}>
                          <Button
                            onClick={() => deleteItem(book)}
                            color="error"
                          >
                            Eliminar
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography>Resumen de compra</Typography>
          <Box mt={4}>
            <Card>
              <CardContent>
                <Typography my={2}>Envio a domicilio no incluido</Typography>
                <Typography my={2} fontWeight="bold">
                  Productos: ({cartBooks.length})
                </Typography>
                <Typography my={2} fontWeight="bold">
                  Total: {total}
                </Typography>
                <Button fullWidth variant="contained" color="warning">
                  Comprar
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>

    // <div className="container mt-5">
    //   <div className="row d-flex">
    //     <div className="col-2 mx-2">Nombre</div>
    //     <div className="col-2 mx-2">Item</div>
    //     <div className="col-2 mx-2">Precio</div>
    //     <div className="col-2 mx-2">Cantidad</div>
    //     <div className="col-2 mx-2">Acciones</div>
    //   </div>
    //   <div className="row">
    //     <div className="col-2 mx-2">{data.title}</div>
    //     <div className="col-2 mx-2"></div>
    //     <div className="col-2 mx-2"></div>
    //     <div className="col-2 mx-2"></div>
    //     <div className="col-2 mx-2"></div>
    //   </div>
    // </div>
  );
};
export default Cart;
