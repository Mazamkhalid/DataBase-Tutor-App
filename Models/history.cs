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
    
    public partial class history
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public history()
        {
            this.ratings = new HashSet<rating>();
        }
    
        public int historyID { get; set; }
        public Nullable<int> pid { get; set; }
        public Nullable<int> did { get; set; }
        public string prescription { get; set; }
        public string date { get; set; }
        public string time { get; set; }
    
        public virtual juniorDoctor juniorDoctor { get; set; }
        public virtual patient patient { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<rating> ratings { get; set; }
    }
}
