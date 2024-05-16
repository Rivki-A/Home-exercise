CREATE TABLE [dbo].[members] (
    [1]                INT            IDENTITY (1, 1) NOT NULL,
    [111]          NVARCHAR (MAX) NOT NULL,
    [Narrrme]              NVARCHAR (MAX) NOT NULL,
    [bbb]              NVARCHAR (MAX) NOT NULL,
    [ttt]            NVARCHAR (MAX) NOT NULL,
    [HouseNumber]       INT            NOT NULL,
    [DateOfBirth]       DATETIME2 (7)  NOT NULL,
    [Phone]             NVARCHAR (MAX) NOT NULL,
    [MobilePhone]       NVARCHAR (MAX) NOT NULL,
    [NumOfVaccinations] INT            NOT NULL,
    [StartOfIll]        DATETIME2 (7)  NOT NULL,
    [EndOfIll]          DATETIME2 (7)  NOT NULL,
    CONSTRAINT [PK_members] PRIMARY KEY CLUSTERED ([1] ASC)
);

