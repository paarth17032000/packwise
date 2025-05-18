
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const TripPageSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Skeleton className="h-8 w-24" />
          <Skeleton className="h-10 w-32" />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6">
        {/* Country Info Skeleton */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-8 w-48" />
            </div>
            
            <Skeleton className="h-6 w-32" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card className="p-4 bg-white shadow-sm">
              <div className="flex items-start gap-3">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div className="space-y-2 w-full">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
            </Card>
            
            <Card className="p-4 bg-white shadow-sm">
              <div className="flex items-start gap-3">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div className="space-y-2 w-full">
                  <Skeleton className="h-5 w-24" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        {/* Checklist Skeleton */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-8 w-48" />
          </div>
          
          <div className="grid gap-4">
            {[...Array(4)].map((_, index) => (
              <Card key={index} className="bg-white rounded-xl shadow-sm p-4">
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-5 w-10 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-4" />
                </div>
                
                <div className="space-y-2">
                  {[...Array(3)].map((_, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-4 rounded-md" />
                        <Skeleton className="h-4 w-32" />
                      </div>
                      <Skeleton className="h-6 w-6 rounded" />
                    </div>
                  ))}
                  
                  <div className="flex gap-2 mt-3">
                    <Skeleton className="h-10 flex-1" />
                    <Skeleton className="h-10 w-20" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TripPageSkeleton;