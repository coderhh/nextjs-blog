const companyInfoUrl = 'https://api.spacexdata.com/v4/company';

export async function getCompanyInfoData(): Promise<{ date: string; title: string; id: string} []> {
    const res = await fetch(companyInfoUrl);
    return res.json();
}