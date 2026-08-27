export interface NonPharmaTreatment {
  type: string;
  description: string;
}

export interface PharmaTreatment {
  type: 'Cổ phương' | 'Đối pháp lập phương' | 'Nghiệm phương' | 'Tân dược' | 'Thuốc dùng ngoài' | 'Dùng ngoài' | 'Gia giảm' | string;
  name: string;
  ingredients?: string;
  instructions?: string;
  description?: string;
}

export interface ClinicalVariant {
  id: string;
  name: string;
  symptoms: string;
  batCuong: string;
  kinhLac: string;
  nguyenNhan: string;
  treatmentPrincipe: string;
  pharmaTreatments: PharmaTreatment[];
  nonPharmaTreatments: NonPharmaTreatment[];
}

export interface Disease {
  id: string;
  name: string;
  traditionalName: string;
  description: string;
  modernDiagnosis: string;
  traditionalDiagnosis: string;
  prevention: string;
  variants: ClinicalVariant[];
  tap?: number; // 0, 1, 2, 3
}

export interface Herb {
  id: string;
  name: string;
  scientificName: string;
  source: 'N' | 'B' | 'B-N'; // N: Nam, B: Bắc
}
