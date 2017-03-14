
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 03/14/2017 16:03:27
-- Generated from EDMX file: D:\MyProject\17codes\17codes.model\Model.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [17codes];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[user]', 'U') IS NOT NULL
    DROP TABLE [dbo].[user];
GO
IF OBJECT_ID(N'[dbo].[articalSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[articalSet];
GO
IF OBJECT_ID(N'[dbo].[roleSet]', 'U') IS NOT NULL
    DROP TABLE [dbo].[roleSet];
GO
IF OBJECT_ID(N'[dbo].[action]', 'U') IS NOT NULL
    DROP TABLE [dbo].[action];
GO
IF OBJECT_ID(N'[dbo].[articalType]', 'U') IS NOT NULL
    DROP TABLE [dbo].[articalType];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'user'
CREATE TABLE [dbo].[user] (
    [id] int IDENTITY(1,1) NOT NULL,
    [userAlias] nvarchar(max)  NOT NULL,
    [userAvatarUrl] nvarchar(max)  NOT NULL,
    [userAccount] nvarchar(max)  NOT NULL,
    [userPwd] nvarchar(max)  NOT NULL,
    [userSelfDes] nvarchar(max)  NOT NULL,
    [userSex] nvarchar(max)  NOT NULL,
    [userBirth] datetime  NOT NULL,
    [userPhone] nvarchar(max)  NOT NULL,
    [userName] nvarchar(max)  NOT NULL,
    [userEmail] nvarchar(max)  NOT NULL,
    [userSite] nvarchar(max)  NOT NULL,
    [userAddress] nvarchar(max)  NOT NULL,
    [userPosition] nvarchar(max)  NOT NULL,
    [userCreateTime] datetime  NOT NULL,
    [useLoginStats] nvarchar(max)  NOT NULL,
    [userHomeDown] nvarchar(max)  NOT NULL,
    [userFuns] nvarchar(max)  NOT NULL,
    [userFocus] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'artical'
CREATE TABLE [dbo].[artical] (
    [id] int IDENTITY(1,1) NOT NULL,
    [artTitle] nvarchar(max)  NOT NULL,
    [artCreateTime] datetime  NOT NULL,
    [artContent] nvarchar(max)  NOT NULL,
    [userName] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'role'
CREATE TABLE [dbo].[role] (
    [id] int IDENTITY(1,1) NOT NULL,
    [roleName] nvarchar(max)  NOT NULL,
    [roleDes] nvarchar(max)  NOT NULL
);
GO

-- Creating table 'action'
CREATE TABLE [dbo].[action] (
    [id] int IDENTITY(1,1) NOT NULL,
    [actionName] nvarchar(max)  NULL,
    [actionUrl] nvarchar(max)  NULL,
    [actionSort] int  NULL,
    [actionCreateTime] datetime  NULL,
    [actionImgUrl] nvarchar(max)  NULL,
    [actionParent] int  NULL,
    [actionDes] nvarchar(512)  NULL
);
GO

-- Creating table 'articalType'
CREATE TABLE [dbo].[articalType] (
    [id] int IDENTITY(1,1) NOT NULL,
    [artTypeName] nvarchar(max)  NOT NULL,
    [artTypeCount] int  NOT NULL,
    [artTypeShow] bit  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [id] in table 'user'
ALTER TABLE [dbo].[user]
ADD CONSTRAINT [PK_user]
    PRIMARY KEY CLUSTERED ([id] ASC);
GO

-- Creating primary key on [id] in table 'artical'
ALTER TABLE [dbo].[artical]
ADD CONSTRAINT [PK_artical]
    PRIMARY KEY CLUSTERED ([id] ASC);
GO

-- Creating primary key on [id] in table 'role'
ALTER TABLE [dbo].[role]
ADD CONSTRAINT [PK_role]
    PRIMARY KEY CLUSTERED ([id] ASC);
GO

-- Creating primary key on [id] in table 'action'
ALTER TABLE [dbo].[action]
ADD CONSTRAINT [PK_action]
    PRIMARY KEY CLUSTERED ([id] ASC);
GO

-- Creating primary key on [id] in table 'articalType'
ALTER TABLE [dbo].[articalType]
ADD CONSTRAINT [PK_articalType]
    PRIMARY KEY CLUSTERED ([id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------