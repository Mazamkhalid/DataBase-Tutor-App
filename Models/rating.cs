//------------------------------------------------------------------------------
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
    using System.Collections.Generic;
    
    public partial class rating
    {
        public int ratingID { get; set; }
        public Nullable<int> historyID { get; set; }
        public Nullable<int> sid { get; set; }
        public Nullable<int> rating1 { get; set; }
    
        public virtual history history { get; set; }
        public virtual seneriorDoctor seneriorDoctor { get; set; }
    }
}