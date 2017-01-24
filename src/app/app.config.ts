

import {Headers} from "@angular/http";

export const config = {
  API_URL:  'http://localhost:7000/api',
  JSON_HEADER: { headers: new Headers({ 'Content-Type': 'application/json'}) }
}
