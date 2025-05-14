import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-json-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './json-table.component.html',
  styleUrl: './json-table.component.scss'
})
export class JsonTableComponent implements OnInit {

  tables: {
    title: string;
    headers: string[];
    nestedHeaders: { [key: string]: string[] };
    data: any[];
  }[] = [];

  rawData = [
  {
    "PROJETS EXISTANTS": "Projet de construction CHU Laayoune",
    "LF_2025": "160 663 534,00"
  },
  {
    "PROJETS EXISTANTS": "Projet de construction CHU Ibn Sina",
    "LF_2025": "1 400 000 000,00"
  },
  {
    "PROJETS EXISTANTS": "Equipement du CHU Agadir",
    "LF_2025": "300 000 000,00"
  },
  {
    "PROJETS EXISTANTS": "Projet de construction du CHU Errachidia",
    "LF_2025": "239 888 660,00"
  },
  {
    "PROJETS EXISTANTS": "Projet de construction CHU GUELMIM",
    "LF_2025": "65 000 000,00"
  },
  {
    "PROJETS EXISTANTS": "Projet de construction et équipement du CHU Beni Mellal",
    "LF_2025": "134 820 000,00"
  },
  {
    "PROJETS EXISTANTS": "Mise à niveau des infrastructures et des équipements sanitaires",
    "LF_2025": "550 000 000,00"
  },
  {
    "PROJETS EXISTANTS": "Réhabilitation des établissements de soins de santé primaire (ESSP)",
    "LF_2025": "1 152 355 128,00"
  },
  {
    "PROJETS EXISTANTS": "Réhabilitation des ISPITS",
    "LF_2025": "35 500 000,00"
  },
  {
    "PROJETS EXISTANTS": "Système d'Information intégré",
    "LF_2025": "75 000 000,00"
  },
  {
    "PROJETS EXISTANTS": "Reconstruction et de mise à niveau générale des territoires sinistrés suite au séisme d'al Haouz",
    "LF_2025": "180 593 631,00"
  }
]


  rawData2 = [
  {
    "PROGRAMME": "100 DUMMY PROGRAM A",
    "LF_2025": {
      "CP_2025": "1000000,00",
      "CE_2026": "2000000,00"
    },
    "Delegations": {
      "CP_2025": "-",
      "CE_2026": null
    },
    "Disponible_engagements": {
      "CP_2025": "1000000,00",
      "CE_2026": "2000000,00"
    }
  },
  {
    "PROGRAMME": "101 DUMMY PROGRAM B",
    "LF_2025": {
      "CP_2025": "3000000,00",
      "CE_2026": "4000000,00"
    },
    "Delegations": {
      "CP_2025": "100000,00",
      "CE_2026": null
    },
    "Disponible_engagements": {
      "CP_2025": "2900000,00",
      "CE_2026": "4000000,00"
    }
  },
  {
    "PROGRAMME": "102 DUMMY PROGRAM C",
    "LF_2025": {
      "CP_2025": "500000,00",
      "CE_2026": "600000,00"
    },
    "Delegations": {
      "CP_2025": "200000,00",
      "CE_2026": null
    },
    "Disponible_engagements": {
      "CP_2025": "300000,00",
      "CE_2026": "600000,00"
    }
  },
  {
    "PROGRAMME": "103 DUMMY PROGRAM D",
    "LF_2025": {
      "CP_2025": "700000,00",
      "CE_2026": "800000,00"
    },
    "Delegations": {
      "CP_2025": "-",
      "CE_2026": null
    },
    "Disponible_engagements": {
      "CP_2025": "700000,00",
      "CE_2026": "800000,00"
    }
  },
  {
    "PROGRAMME": "104 DUMMY PROGRAM E",
    "LF_2025": {
      "CP_2025": "900000,00",
      "CE_2026": "100000,00"
    },
    "Delegations": {
      "CP_2025": "50000,00",
      "CE_2026": "100000,00"
    },
    "Disponible_engagements": {
      "CP_2025": "850000,00",
      "CE_2026": "-"
    }
  },
  {
    "PROGRAMME": "105 DUMMY PROGRAM F",
    "LF_2025": {
      "CP_2025": "10000000,00",
      "CE_2026": "20000000,00"
    },
    "Delegations": {
      "CP_2025": "500000,00",
      "CE_2026": "600000,00"
    },
    "Disponible_engagements": {
      "CP_2025": "9500000,00",
      "CE_2026": "19400000,00"
    }
  },
  {
    "PROGRAMME": "999 TOTAL DUMMY",
    "LF_2025": {
      "CP_2025": "16000000,00",
      "CE_2026": "27000000,00"
    },
    "Delegations": {
      "CP_2025": "850000,00",
      "CE_2026": "700000,00"
    },
    "Disponible_engagements": {
      "CP_2025": "15150000,00",
      "CE_2026": "26300000,00"
    }
  }
]

 rawData3 = [
  {
    "": "Transfer to Dummy Social Support Fund",
    "DESTINATION": "DSSF",
    "Credits_programmes": { "CP_2025": "1 000 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy School A",
    "DESTINATION": "DSA",
    "Credits_programmes": { "CP_2025": "750 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Transfer to Dummy Foundation Contract",
    "DESTINATION": "DFND",
    "Credits_programmes": { "CP_2025": "300 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Transfer for Dummy Vaccine Allocation",
    "DESTINATION": "DVAX",
    "Credits_programmes": { "CP_2025": "120 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Transfer to Dummy Child Protection League",
    "DESTINATION": "DCPL",
    "Credits_programmes": { "CP_2025": "25 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Institute A",
    "DESTINATION": "DIA",
    "Credits_programmes": { "CP_2025": "12 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Modernization grant to Dummy Health Institute",
    "DESTINATION": "DHI",
    "Credits_programmes": { "CP_2025": "7 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant (Dummy Center A)",
    "DESTINATION": "DCA",
    "Credits_programmes": { "CP_2025": "3 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Blood Center",
    "DESTINATION": "DBC",
    "Credits_programmes": { "CP_2025": "8 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Hospital Tanger",
    "DESTINATION": "DH TANG",
    "Credits_programmes": { "CP_2025": "10 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Hospital Oujda",
    "DESTINATION": "DH OUJD",
    "Credits_programmes": { "CP_2025": "15 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Hospital Fes",
    "DESTINATION": "DH FES",
    "Credits_programmes": { "CP_2025": "18 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Hospital Rabat",
    "DESTINATION": "DH RABAT",
    "Credits_programmes": { "CP_2025": "45 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Hospital Casa",
    "DESTINATION": "DH CASA",
    "Credits_programmes": { "CP_2025": "45 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Hospital Marrakech",
    "DESTINATION": "DH MARRA",
    "Credits_programmes": { "CP_2025": "18 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Equipment grant to Dummy Hospital Agadir",
    "DESTINATION": "DH AGADIR",
    "Credits_programmes": { "CP_2025": "9 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Transfer to Dummy University of Fes",
    "DESTINATION": "DUF",
    "Credits_programmes": { "CP_2025": "90 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "120 000 000,00" }
  },
  {
    "": "Transfer to Dummy Solidarity Foundation",
    "DESTINATION": "DSF",
    "Credits_programmes": { "CP_2025": "100 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Transfer to Dummy Hassan II Foundation",
    "DESTINATION": "DH2F",
    "Credits_programmes": { "CP_2025": "65 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "0,00" }
  },
  {
    "": "Transfer to Dummy Regional Partnership (Agadir)",
    "DESTINATION": "DRPA",
    "Credits_programmes": { "CP_2025": "10 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "12 000 000,00" }
  },
  {
    "": "Transfer to Dummy Investment Company",
    "DESTINATION": "DISC",
    "Credits_programmes": { "CP_2025": "55 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "50 000 000,00" }
  },
  {
    "": "TOTAL Dummy Transfers and Subsidies",
    "DESTINATION": null,
    "Credits_programmes": { "CP_2025": "2 000 000 000,00" },
    "Subventions_et_versements_effectues": { "CP_2025": "182 000 000,00" }
  }
];


  headers: string[] = [];
  transformedData: any[] = [];

  headers2: string[] = [];
  transformedData2: any[] = [];

  headers3: string[] = [];
  transformedData3: any[] = [];

  ngOnInit(): void {
    this.tables = [
      { title: 'Projet existant dans le cadre de la lettre de cadrage 2025', raw: this.rawData },
      { title: 'BI par programme budgetaire', raw: this.rawData2 },
      { title: 'Subventions et transferts', raw: this.rawData3 }
    ].map(table => {
      const { headers, nestedHeaders } = this.extractHeaders(table.raw);
      return {
        title: table.title,
        headers: headers,
        nestedHeaders: nestedHeaders,
        data: this.transformData(table.raw, headers, nestedHeaders)
      };
    });
  }

  extractHeaders(data: any[]): { headers: string[], nestedHeaders: { [key: string]: string[] } } {
    const headers: string[] = [];
    const nestedHeaders: { [key: string]: string[] } = {};

    data.forEach(item => {
      Object.keys(item).forEach(key => {
        if (!headers.includes(key)) {
          headers.push(key);
        }

        if (item[key] && typeof item[key] === 'object' && !Array.isArray(item[key])) {
          if (!nestedHeaders[key]) {
            nestedHeaders[key] = [];
          }

          Object.keys(item[key]).forEach(subKey => {
            if (!nestedHeaders[key].includes(subKey)) {
              nestedHeaders[key].push(subKey);
            }
          });
        }
      });
    });

    return { headers, nestedHeaders };
  }

  transformData(data: any[], headers: string[], nestedHeaders: { [key: string]: string[] }): any[] {
    return data.map(item => {
      const row: { [key: string]: any } = {};

      headers.forEach(header => {
        if (nestedHeaders[header]) {
          if (!row[header]) {
            row[header] = {};
          }

          nestedHeaders[header].forEach(subHeader => {
            if (item[header] && item[header][subHeader] !== undefined) {
              row[header][subHeader] = item[header][subHeader];
            } else {
              row[header][subHeader] = null;
            }
          });
        }
        else {
          row[header] = item[header] !== undefined ? item[header] : null;
        }
      });

      return row;
    });
  }
}
