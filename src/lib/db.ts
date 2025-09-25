import { ContactFormData } from "./contactFormService";

export async function saveContactForm(data: ContactFormData, db: any): Promise<{ FormID: number }> {
  const stmt = db.prepare(
    `INSERT INTO ContactForm (Name, Email, Phone, Description) VALUES (?, ?, ?, ?)`
  );
  const result = await stmt.bind(data.Name, data.Email, data.Phone, data.Description).run();
  return { FormID: result.meta?.last_row_id };
}
