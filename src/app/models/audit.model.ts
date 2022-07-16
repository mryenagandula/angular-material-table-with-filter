export interface AuditEntry{
    clientIp: string;
    clientIpDetails: IpDetails[]
    createdAt: any;
    email: string;
    hostname: string;
    serverIp: string;
    serverIpDetails: IpDetails[];
    statusCode: string | number;
    statusMessage: any;
    updatedAt: any;
    uri: any;
    _id: string | number;
}

export interface IpDetails{
    city: string;
    country: string;
    ip: string;
    loc: any;
    org: string;
    postal: any;
    readme: any;
    region: any;
    timezone: any;
    _id: string | number
}