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

  rawData = [
    {
      "PROJETS EXISTANTS": "Projet de construction CHU Laayoune",
      "LF 2025": "160 663 534,00"
    },
    {
      "PROJETS EXISTANTS": "Projet de construction CHU Ibn Sina",
      "LF 2025": "1 400 000 000,00"
    },
    {
      "PROJETS EXISTANTS": "Equipement du CHU Agadir",
      "LF 2025": "300 000 000,00"
    },
    {
      "PROJETS EXISTANTS": "Projet de construction du CHU Errachidia",
      "LF 2025": "239 888 660,00"
    },
    {
      "PROJETS EXISTANTS": "Projet de construction CHU GUELMIM",
      "LF 2025": "65 000 000,00"
    },
    {
      "PROJETS EXISTANTS": "Projet de construction et équipement du CHU Beni Mellal",
      "LF 2025": "134 820 000,00"
    },
    {
      "PROJETS EXISTANTS": "Mise à niveau des infrastructures et des équipements sanitaires",
      "LF 2025": "550 000 000,00"
    },
    {
      "PROJETS EXISTANTS": "Réhabilitation des établissements de soins de santé primaire (ESSP)",
      "LF 2025": "1 152 355 128,00"
    },
    {
      "PROJETS EXISTANTS": "Réhabilitation des ISPITS",
      "LF 2025": "35 500 000,00"
    },
    {
      "PROJETS EXISTANTS": "Système d'Information intégré",
      "LF 2025": "75 000 000,00"
    },
    {
      "PROJETS EXISTANTS": "Reconstruction et de mise à niveau générale des territoires sinistrés suite au séisme d'al Haouz",
      "LF 2025": "180 593 631,00"
    }
  ];

  rawData2 = [
    {
      "PROGRAMME": "100 DUMMY PROGRAM A",
      "LF_2025_CP_2025": "1000000,00",
      "LF_2025_CE_2026": "2000000,00",
      "Delegations_CP_2025": "-",
      "Delegations_CE_2026": null,
      "Disponible_engagements_CP_2025": "1000000,00",
      "Disponible_engagements_CE_2026": "2000000,00"
    },
    {
      "PROGRAMME": "101 DUMMY PROGRAM B",
      "LF_2025_CP_2025": "3000000,00",
      "LF_2025_CE_2026": "4000000,00",
      "Delegations_CP_2025": "100000,00",
      "Delegations_CE_2026": null,
      "Disponible_engagements_CP_2025": "2900000,00",
      "Disponible_engagements_CE_2026": "4000000,00"
    },
    {
      "PROGRAMME": "102 DUMMY PROGRAM C",
      "LF_2025_CP_2025": "500000,00",
      "LF_2025_CE_2026": "600000,00",
      "Delegations_CP_2025": "200000,00",
      "Delegations_CE_2026": null,
      "Disponible_engagements_CP_2025": "300000,00",
      "Disponible_engagements_CE_2026": "600000,00"
    },
    {
      "PROGRAMME": "103 DUMMY PROGRAM D",
      "LF_2025_CP_2025": "700000,00",
      "LF_2025_CE_2026": "800000,00",
      "Delegations_CP_2025": "-",
      "Delegations_CE_2026": null,
      "Disponible_engagements_CP_2025": "700000,00",
      "Disponible_engagements_CE_2026": "800000,00"
    },
    {
      "PROGRAMME": "104 DUMMY PROGRAM E",
      "LF_2025_CP_2025": "900000,00",
      "LF_2025_CE_2026": "100000,00",
      "Delegations_CP_2025": "50000,00",
      "Delegations_CE_2026": "100000,00",
      "Disponible_engagements_CP_2025": "850000,00",
      "Disponible_engagements_CE_2026": "-"
    },
    {
      "PROGRAMME": "105 DUMMY PROGRAM F",
      "LF_2025_CP_2025": "10000000,00",
      "LF_2025_CE_2026": "20000000,00",
      "Delegations_CP_2025": "500000,00",
      "Delegations_CE_2026": "600000,00",
      "Disponible_engagements_CP_2025": "9500000,00",
      "Disponible_engagements_CE_2026": "19400000,00"
    },
    {
      "PROGRAMME": "999 TOTAL DUMMY",
      "LF_2025_CP_2025": "16000000,00",
      "LF_2025_CE_2026": "27000000,00",
      "Delegations_CP_2025": "850000,00",
      "Delegations_CE_2026": "700000,00",
      "Disponible_engagements_CP_2025": "15150000,00",
      "Disponible_engagements_CE_2026": "26300000,00"
    }
  ];

  rawData3 = [
    
      {
        "Description": "Transfer to Dummy Social Support Fund",
        "DESTINATION": "DSSF",
        "Credits_programmes_CP_2025": "1 000 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy School A",
        "DESTINATION": "DSA",
        "Credits_programmes_CP_2025": "750 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Transfer to Dummy Foundation Contract",
        "DESTINATION": "DFND",
        "Credits_programmes_CP_2025": "300 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Transfer for Dummy Vaccine Allocation",
        "DESTINATION": "DVAX",
        "Credits_programmes_CP_2025": "120 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Transfer to Dummy Child Protection League",
        "DESTINATION": "DCPL",
        "Credits_programmes_CP_2025": "25 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Institute A",
        "DESTINATION": "DIA",
        "Credits_programmes_CP_2025": "12 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Modernization grant to Dummy Health Institute",
        "DESTINATION": "DHI",
        "Credits_programmes_CP_2025": "7 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant (Dummy Center A)",
        "DESTINATION": "DCA",
        "Credits_programmes_CP_2025": "3 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Blood Center",
        "DESTINATION": "DBC",
        "Credits_programmes_CP_2025": "8 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Hospital Tanger",
        "DESTINATION": "DH TANG",
        "Credits_programmes_CP_2025": "10 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Hospital Oujda",
        "DESTINATION": "DH OUJD",
        "Credits_programmes_CP_2025": "15 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Hospital Fes",
        "DESTINATION": "DH FES",
        "Credits_programmes_CP_2025": "18 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Hospital Rabat",
        "DESTINATION": "DH RABAT",
        "Credits_programmes_CP_2025": "45 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Hospital Casa",
        "DESTINATION": "DH CASA",
        "Credits_programmes_CP_2025": "45 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Hospital Marrakech",
        "DESTINATION": "DH MARRA",
        "Credits_programmes_CP_2025": "18 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Equipment grant to Dummy Hospital Agadir",
        "DESTINATION": "DH AGADIR",
        "Credits_programmes_CP_2025": "9 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Transfer to Dummy University of Fes",
        "DESTINATION": "DUF",
        "Credits_programmes_CP_2025": "90 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "120 000 000,00"
      },
      {
        "Description": "Transfer to Dummy Solidarity Foundation",
        "DESTINATION": "DSF",
        "Credits_programmes_CP_2025": "100 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Transfer to Dummy Hassan II Foundation",
        "DESTINATION": "DH2F",
        "Credits_programmes_CP_2025": "65 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "0,00"
      },
      {
        "Description": "Transfer to Dummy Regional Partnership (Agadir)",
        "DESTINATION": "DRPA",
        "Credits_programmes_CP_2025": "10 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "12 000 000,00"
      },
      {
        "Description": "Transfer to Dummy Investment Company",
        "DESTINATION": "DISC",
        "Credits_programmes_CP_2025": "55 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "50 000 000,00"
      },
      {
        "Description": "TOTAL Dummy Transfers and Subsidies",
        "DESTINATION": null,
        "Credits_programmes_CP_2025": "2 000 000 000,00",
        "Subventions_et_versements_effectues_CP_2025": "182 000 000,00"
      }


  ]
  headers: string[] = [];
  transformedData: any[] = [];

  headers2: string[] = [];
  transformedData2: any[] = [];

  headers3: string[] = [];
  transformedData3: any[] = [];

  ngOnInit(): void {

    const headerSet = new Set<string>();
    this.rawData.forEach(item => {
      Object.keys(item).forEach(key => headerSet.add(key));
    });
    this.headers = Array.from(headerSet);
    this.transformedData = this.rawData.map((item: { [key: string]: any }) => {
      const row: { [key: string]: any } = {};
      this.headers.forEach((header: string) => {
        row[header] = item[header] ?? '';
      });
      return row;
    });


    const headerSet2 = new Set<string>();
    this.rawData2.forEach(item => {
      Object.keys(item).forEach(key => headerSet2.add(key));
    });
    this.headers2 = Array.from(headerSet2);
    this.transformedData2 = this.rawData2.map((item: { [key: string]: any }) => {
      const row: { [key: string]: any } = {};
      this.headers2.forEach((header: string) => {
        row[header] = item[header] ?? '';
      });
      return row;
    });

    const headerSet3 = new Set<string>();
    this.rawData3.forEach(item => {
      Object.keys(item).forEach(key => headerSet3.add(key));
    });
    this.headers3 = Array.from(headerSet3);
    this.transformedData3 = this.rawData3.map((item: { [key: string]: any }) => {
      const row: { [key: string]: any } = {};
      this.headers3.forEach((header: string) => {
        row[header] = item[header] ?? '';
      });
      return row;
    });
  }
}
