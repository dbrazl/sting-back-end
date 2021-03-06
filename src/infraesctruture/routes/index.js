import { Router } from "express";

import PharmsController from "../../application/controllers/PharmsController";
import MedicinesController from "../../application/controllers/MedicinesController";
import VacinationsController from "../../application/controllers/VacinationsController";
import VacineSchedulingController from "../../application/controllers/VacineSchedulingController";

import MedicinesIndexValidator from "../../application/middlewares/validators/MedicinesController/IndexValidator";
import VacinationsIndexValidator from "../../application/middlewares/validators/VacinationsController/IndexValidator";
import IndexHashCpfValidator from "../../application/middlewares/validators/VacinationsController/IndexHashCpfValidator";
import VacinationsStoreValidator from "../../application/middlewares/validators/VacinationsController/StoreValidator";
import VacineSchedulingIndexDatesValidator from "../../application/middlewares/validators/VacineSchedulingController/IndexDatesValidator";
import VacineSchedulingIndexSchudulesValidator from "../../application/middlewares/validators/VacineSchedulingController/IndexSchedulesValidator";
import PharmsIndexValidator from "../../application/middlewares/validators/PharmsController/IndexValidator";

const app = new Router();

app.get("/pharms", PharmsIndexValidator, PharmsController.index);
app.get(
  "/pharms/medicine/available/:medicineName",
  PharmsController.indexByMedicine
);
app.get("/medicines", MedicinesIndexValidator, MedicinesController.index);
app.get("/vacines", VacinationsIndexValidator, VacinationsController.index);
app.get(
  "/vacine/dates",
  VacineSchedulingIndexDatesValidator,
  VacineSchedulingController.indexAvailableDates
);
app.get(
  "/vacine/schedules",
  VacineSchedulingIndexSchudulesValidator,
  VacineSchedulingController.indexAvailableSchedules
);
app.get(
  "/vacine/hashCpf",
  IndexHashCpfValidator,
  VacinationsController.indexHashCpf
);
app.post("/vacine", VacinationsStoreValidator, VacinationsController.store);

export default app;
