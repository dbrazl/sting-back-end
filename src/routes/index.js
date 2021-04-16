import { Router } from "express";

import PharmsController from "../controllers/PharmsController";
import MedicinesController from "../controllers/MedicinesController";
import VacineController from "../controllers/VacineController";

import MedicinesIndexValidator from "../middlewares/validators/MedicinesController/IndexValidator";

const app = new Router();

app.get("/pharms", PharmsController.index);
app.get(
  "/pharms/medicine/available/:medicineName",
  PharmsController.indexByMedicine
);
app.get("/medicines", MedicinesIndexValidator, MedicinesController.index);
app.get("/vacines", VacineController.index);
app.get("/vacine/dates", VacineController.indexDates);
app.get("/vacine/schedules", VacineController.indexSchedules);
app.post("/vacine", VacineController.store);

export default app;
