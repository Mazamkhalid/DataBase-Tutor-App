﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace fyp.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class virtualClinicEntities : DbContext
    {
        public virtualClinicEntities()
            : base("name=virtualClinicEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<acceptCase> acceptCases { get; set; }
        public virtual DbSet<examine> examines { get; set; }
        public virtual DbSet<history> histories { get; set; }
        public virtual DbSet<juniorDoctor> juniorDoctors { get; set; }
        public virtual DbSet<nurse> nurses { get; set; }
        public virtual DbSet<patient> patients { get; set; }
        public virtual DbSet<rating> ratings { get; set; }
        public virtual DbSet<seneriorDoctor> seneriorDoctors { get; set; }
        public virtual DbSet<vital> vitals { get; set; }
    }
}
