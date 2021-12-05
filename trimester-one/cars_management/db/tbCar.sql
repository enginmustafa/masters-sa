USE [MastersCarManagement]
GO

/****** Object:  Table [dbo].[tbCar]    Script Date: 12/5/2021 9:49:38 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[tbCar](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[BrandID] [int] NOT NULL,
	[FuelID] [int] NOT NULL,
	[Model] [varchar](100) NOT NULL,
	[ReleaseYear] [int] NULL,
	[HorsePower] [int] NULL,
 CONSTRAINT [PK_tbCar] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

ALTER TABLE [dbo].[tbCar]  WITH CHECK ADD  CONSTRAINT [FK_tbBrand_tbCar] FOREIGN KEY([BrandID])
REFERENCES [dbo].[tbBrand] ([ID])
GO

ALTER TABLE [dbo].[tbCar] CHECK CONSTRAINT [FK_tbBrand_tbCar]
GO

ALTER TABLE [dbo].[tbCar]  WITH CHECK ADD  CONSTRAINT [FK_tbFuel_tbCar] FOREIGN KEY([FuelID])
REFERENCES [dbo].[tbFuel] ([ID])
GO

ALTER TABLE [dbo].[tbCar] CHECK CONSTRAINT [FK_tbFuel_tbCar]
GO


