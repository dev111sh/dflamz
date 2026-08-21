/* =====================================================================
   D'Flamz Nation — site data
   Single source of truth for copy, roster, profiles, form options, clients.

   SWAP POINTS (safe to edit anytime):
   - Photos: add new files to src/assets/ and map keys in src/assets/images.js.
     DJs with img:null render the branded placeholder card until a photo lands.
   - Client logos: CLIENTS[].logo is null for now → styled name card.
     Drop logo files in src/assets/logos/ and set the path to switch to a logo wall.
   - Booking budget currency: BUDGET_RANGES uses USD as an international default.
     Edit the strings if you want NGN or dual currency.

   This file is a barrel: content now lives in domain modules below. Every
   existing `import { X } from "../data/site"` keeps working unchanged.
   ===================================================================== */

export * from "./links.js";
export * from "./roster.js";
export * from "./company.js";
export * from "./partners.js";
export * from "./work.js";
export * from "./forms.js";
